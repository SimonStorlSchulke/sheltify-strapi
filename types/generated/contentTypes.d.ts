import type { Schema, Attribute } from "@strapi/strapi";

export interface AdminPermission extends Schema.CollectionType {
  collectionName: "admin_permissions";
  info: {
    name: "Permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<"admin::permission", "manyToOne", "admin::role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: "admin_users";
  info: {
    name: "User";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    roles: Attribute.Relation<"admin::user", "manyToMany", "admin::role"> & Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: "admin_roles";
  info: {
    name: "Role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<"admin::role", "manyToMany", "admin::user">;
    permissions: Attribute.Relation<"admin::role", "oneToMany", "admin::permission">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: "strapi_api_tokens";
  info: {
    name: "Api Token";
    singularName: "api-token";
    pluralName: "api-tokens";
    displayName: "Api Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    type: Attribute.Enumeration<["read-only", "full-access", "custom"]> & Attribute.Required & Attribute.DefaultTo<"read-only">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<"admin::api-token", "oneToMany", "admin::api-token-permission">;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_api_token_permissions";
  info: {
    name: "API Token Permission";
    description: "";
    singularName: "api-token-permission";
    pluralName: "api-token-permissions";
    displayName: "API Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<"admin::api-token-permission", "manyToOne", "admin::api-token">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::api-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::api-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: "strapi_transfer_tokens";
  info: {
    name: "Transfer Token";
    singularName: "transfer-token";
    pluralName: "transfer-tokens";
    displayName: "Transfer Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<"admin::transfer-token", "oneToMany", "admin::transfer-token-permission">;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::transfer-token", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::transfer-token", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_transfer_token_permissions";
  info: {
    name: "Transfer Token Permission";
    description: "";
    singularName: "transfer-token-permission";
    pluralName: "transfer-token-permissions";
    displayName: "Transfer Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<"admin::transfer-token-permission", "manyToOne", "admin::transfer-token">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::transfer-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::transfer-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: "files";
  info: {
    singularName: "file";
    pluralName: "files";
    displayName: "File";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<"plugin::upload.file", "morphToMany">;
    folder: Attribute.Relation<"plugin::upload.file", "manyToOne", "plugin::upload.folder"> & Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: "upload_folders";
  info: {
    singularName: "folder";
    pluralName: "folders";
    displayName: "Folder";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<"plugin::upload.folder", "manyToOne", "plugin::upload.folder">;
    children: Attribute.Relation<"plugin::upload.folder", "oneToMany", "plugin::upload.folder">;
    files: Attribute.Relation<"plugin::upload.folder", "oneToMany", "plugin::upload.file">;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::upload.folder", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::upload.folder", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: "strapi_releases";
  info: {
    singularName: "release";
    pluralName: "releases";
    displayName: "Release";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<["ready", "blocked", "failed", "done", "empty"]> & Attribute.Required;
    actions: Attribute.Relation<"plugin::content-releases.release", "oneToMany", "plugin::content-releases.release-action">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::content-releases.release", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::content-releases.release", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: "strapi_release_actions";
  info: {
    singularName: "release-action";
    pluralName: "release-actions";
    displayName: "Release Action";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<["publish", "unpublish"]> & Attribute.Required;
    entry: Attribute.Relation<"plugin::content-releases.release-action", "morphToOne">;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<"plugin::content-releases.release-action", "manyToOne", "plugin::content-releases.release">;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::content-releases.release-action", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::content-releases.release-action", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: "i18n_locale";
  info: {
    singularName: "locale";
    pluralName: "locales";
    collectionName: "locales";
    displayName: "Locale";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: "up_permissions";
  info: {
    name: "permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<"plugin::users-permissions.permission", "manyToOne", "plugin::users-permissions.role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::users-permissions.permission", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::users-permissions.permission", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: "up_roles";
  info: {
    name: "role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<"plugin::users-permissions.role", "oneToMany", "plugin::users-permissions.permission">;
    users: Attribute.Relation<"plugin::users-permissions.role", "oneToMany", "plugin::users-permissions.user">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::users-permissions.role", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::users-permissions.role", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: "up_users";
  info: {
    name: "user";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<"plugin::users-permissions.user", "manyToOne", "plugin::users-permissions.role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::users-permissions.user", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::users-permissions.user", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiAboutPageAboutPage extends Schema.SingleType {
  collectionName: "about_pages";
  info: {
    singularName: "about-page";
    pluralName: "about-pages";
    displayName: "\u00DCber uns";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Media<"images">;
    article: Attribute.DynamicZone<
      [
        "article-section.hero",
        "article-section.image",
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.row-start",
        "article-section.section-start"
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::about-page.about-page", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::about-page.about-page", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiAnimalAnimal extends Schema.CollectionType {
  collectionName: "animals";
  info: {
    singularName: "animal";
    pluralName: "animals";
    displayName: "Tier";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    gender: Attribute.Enumeration<["male", "female", "other"]> & Attribute.Required;
    birthday: Attribute.Date;
    thumbnail: Attribute.Media<"images">;
    animal_article: Attribute.Relation<"api::animal.animal", "manyToOne", "api::animal-article.animal-article">;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 280;
      }>;
    emergency: Attribute.Boolean & Attribute.DefaultTo<false>;
    shoulderHeightCm: Attribute.Integer;
    castrated: Attribute.Boolean;
    animalKind: Attribute.Relation<"api::animal.animal", "manyToOne", "api::animal-kind.animal-kind">;
    diseases: Attribute.String;
    tolerating: Attribute.String;
    suitedFor: Attribute.String;
    paten: Attribute.String;
    whereInGermany: Attribute.String;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    weightKg: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::animal.animal", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::animal.animal", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiAnimalArticleAnimalArticle extends Schema.CollectionType {
  collectionName: "animal_articles";
  info: {
    singularName: "animal-article";
    pluralName: "animal-articles";
    displayName: "Tierartikel";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String;
    animals: Attribute.Relation<"api::animal-article.animal-article", "oneToMany", "api::animal.animal">;
    sections: Attribute.DynamicZone<
      [
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.image",
        "article-section.hero",
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.row-start",
        "article-section.section-start"
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::animal-article.animal-article", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::animal-article.animal-article", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiAnimalKindAnimalKind extends Schema.CollectionType {
  collectionName: "animal_kinds";
  info: {
    singularName: "animal-kind";
    pluralName: "animal-kinds";
    displayName: "Tierart";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.Media<"images"> & Attribute.Required;
    animals: Attribute.Relation<"api::animal-kind.animal-kind", "oneToMany", "api::animal.animal">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::animal-kind.animal-kind", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::animal-kind.animal-kind", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: "blogs";
  info: {
    singularName: "blog";
    pluralName: "blogs";
    displayName: "Blogeintrag";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    artikel: Attribute.DynamicZone<
      [
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.news-cards",
        "article-section.row-start",
        "article-section.section-start"
      ]
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<["news", "wissen", "blog"]>;
    thumbnail: Attribute.Media<"images"> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::blog.blog", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::blog.blog", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiContactPageContactPage extends Schema.SingleType {
  collectionName: "contact_pages";
  info: {
    singularName: "contact-page";
    pluralName: "contact-pages";
    displayName: "Kontakt";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    article: Attribute.DynamicZone<
      [
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.row-start",
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.section-start"
      ]
    >;
    mail: Attribute.String;
    phone: Attribute.String;
    hero: Attribute.Media<"images">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::contact-page.contact-page", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::contact-page.contact-page", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiConveyConvey extends Schema.SingleType {
  collectionName: "conveys";
  info: {
    singularName: "convey";
    pluralName: "conveys";
    displayName: "Vermittlung";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Media<"images">;
    article: Attribute.DynamicZone<
      [
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.news-cards",
        "article-section.row-start",
        "article-section.section-start",
        "article-section.text-with-image-section",
        "article-section.text"
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::convey.convey", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::convey.convey", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiConveySubpageConveySubpage extends Schema.CollectionType {
  collectionName: "convey_subpages";
  info: {
    singularName: "convey-subpage";
    pluralName: "convey-subpages";
    displayName: "Unterseiten Vermittlung";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    article: Attribute.DynamicZone<
      [
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.news-cards",
        "article-section.row-start",
        "article-section.section-start",
        "article-section.text-with-image-section",
        "article-section.text"
      ]
    >;
    urlName: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::convey-subpage.convey-subpage", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::convey-subpage.convey-subpage", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiDogsPageDogsPage extends Schema.SingleType {
  collectionName: "dogs_pages";
  info: {
    singularName: "dogs-page";
    pluralName: "dogs-pages";
    displayName: "Hunde";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Media<"images">;
    article: Attribute.DynamicZone<
      [
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.row-start",
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.section-start"
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::dogs-page.dogs-page", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::dogs-page.dogs-page", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiFooterBannerFooterBanner extends Schema.CollectionType {
  collectionName: "footer_banners";
  info: {
    singularName: "footer-banner";
    pluralName: "footer-banners";
    displayName: "Footer-Banner";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    background: Attribute.Media<"images"> & Attribute.Required;
    article: Attribute.DynamicZone<["article-section.button-link", "article-section.text", "article-section.row-start"]>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::footer-banner.footer-banner", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::footer-banner.footer-banner", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiHelpPageHelpPage extends Schema.SingleType {
  collectionName: "help_pages";
  info: {
    singularName: "help-page";
    pluralName: "help-pages";
    displayName: "Helfen";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Media<"images">;
    article: Attribute.DynamicZone<
      [
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.row-start",
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.section-start"
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::help-page.help-page", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::help-page.help-page", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiHelpSubpageHelpSubpage extends Schema.CollectionType {
  collectionName: "help_subpages";
  info: {
    singularName: "help-subpage";
    pluralName: "help-subpages";
    displayName: "Unterseiten Helfen";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    article: Attribute.DynamicZone<
      [
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.news-cards",
        "article-section.row-start",
        "article-section.section-start",
        "article-section.text-with-image-section",
        "article-section.text"
      ]
    >;
    urlName: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::help-subpage.help-subpage", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::help-subpage.help-subpage", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: "homes";
  info: {
    singularName: "home";
    pluralName: "homes";
    displayName: "Startseite";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    article: Attribute.DynamicZone<
      [
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.image",
        "article-section.hero",
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.row-start",
        "article-section.section-start",
        "article-section.news-cards"
      ]
    > &
      Attribute.Required;
    hero: Attribute.Media<"images">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::home.home", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::home.home", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiImprintImprint extends Schema.SingleType {
  collectionName: "imprints";
  info: {
    singularName: "imprint";
    pluralName: "imprints";
    displayName: "Impressum";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    article: Attribute.DynamicZone<["article-section.text"]>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::imprint.imprint", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::imprint.imprint", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiNewsPageNewsPage extends Schema.SingleType {
  collectionName: "news_pages";
  info: {
    singularName: "news-page";
    pluralName: "news-pages";
    displayName: "News & Wissen";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Media<"images">;
    article: Attribute.DynamicZone<
      [
        "article-section.animal-cards",
        "article-section.button-link",
        "article-section.hero",
        "article-section.image",
        "article-section.row-start",
        "article-section.text-with-image-section",
        "article-section.text",
        "article-section.section-start"
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::news-page.news-page", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::news-page.news-page", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiTeammemberTeammember extends Schema.CollectionType {
  collectionName: "teammembers";
  info: {
    singularName: "teammember";
    pluralName: "teammembers";
    displayName: "Teammitglied";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    image: Attribute.Media<"images">;
    mail: Attribute.Email;
    phone: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::teammember.teammember", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::teammember.teammember", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface ContentTypes {
      "admin::permission": AdminPermission;
      "admin::user": AdminUser;
      "admin::role": AdminRole;
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::content-releases.release": PluginContentReleasesRelease;
      "plugin::content-releases.release-action": PluginContentReleasesReleaseAction;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "api::about-page.about-page": ApiAboutPageAboutPage;
      "api::animal.animal": ApiAnimalAnimal;
      "api::animal-article.animal-article": ApiAnimalArticleAnimalArticle;
      "api::animal-kind.animal-kind": ApiAnimalKindAnimalKind;
      "api::blog.blog": ApiBlogBlog;
      "api::contact-page.contact-page": ApiContactPageContactPage;
      "api::convey.convey": ApiConveyConvey;
      "api::convey-subpage.convey-subpage": ApiConveySubpageConveySubpage;
      "api::dogs-page.dogs-page": ApiDogsPageDogsPage;
      "api::footer-banner.footer-banner": ApiFooterBannerFooterBanner;
      "api::help-page.help-page": ApiHelpPageHelpPage;
      "api::help-subpage.help-subpage": ApiHelpSubpageHelpSubpage;
      "api::home.home": ApiHomeHome;
      "api::imprint.imprint": ApiImprintImprint;
      "api::news-page.news-page": ApiNewsPageNewsPage;
      "api::teammember.teammember": ApiTeammemberTeammember;
    }
  }
}
