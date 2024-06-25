import type { Schema, Attribute } from "@strapi/strapi";

export interface ArticleSectionAnimalCards extends Schema.Component {
  collectionName: "components_article_section_animal_cards";
  info: {
    displayName: "Tier-Karten";
    description: "";
    icon: "apps";
  };
  attributes: {
    animals: Attribute.Relation<
      "article-section.animal-cards",
      "oneToMany",
      "api::animal.animal"
    >;
    queryFilter: Attribute.String;
    filteredAmount: Attribute.Integer;
    title: Attribute.String;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
  };
}

export interface ArticleSectionButtonLink extends Schema.Component {
  collectionName: "components_article_section_button_links";
  info: {
    displayName: "buttonLink";
    icon: "exit";
    description: "";
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<["primary", "secondary", "call-to-action"]> &
      Attribute.Required &
      Attribute.DefaultTo<"primary">;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ArticleSectionHero extends Schema.Component {
  collectionName: "components_article_section_heroes";
  info: {
    displayName: "hero";
    description: "";
  };
  attributes: {
    hero: Attribute.Media<"images"> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface ArticleSectionImage extends Schema.Component {
  collectionName: "components_article_section_images";
  info: {
    displayName: "image";
    description: "";
    icon: "picture";
  };
  attributes: {
    images: Attribute.Media<"images", true>;
    title: Attribute.String;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ArticleSectionRowStart extends Schema.Component {
  collectionName: "components_article_section_row_starts";
  info: {
    displayName: "rowStart";
    description: "";
    icon: "apps";
  };
  attributes: {
    columns: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      > &
      Attribute.DefaultTo<6>;
    title: Attribute.String;
    textCentered: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ArticleSectionTextWithImageSection extends Schema.Component {
  collectionName: "components_article_section_text_with_image_sections";
  info: {
    displayName: "textWithImage";
    icon: "picture";
    description: "";
  };
  attributes: {
    text: Attribute.Blocks;
    images: Attribute.Media<"images", true>;
    imagePosition: Attribute.Enumeration<["oben", "rechts", "links", "unten"]> &
      Attribute.Required &
      Attribute.DefaultTo<"rechts">;
    title: Attribute.String;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ArticleSectionText extends Schema.Component {
  collectionName: "components_article_section_texts";
  info: {
    displayName: "text";
    description: "";
  };
  attributes: {
    text: Attribute.Blocks;
    title: Attribute.String;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "article-section.animal-cards": ArticleSectionAnimalCards;
      "article-section.button-link": ArticleSectionButtonLink;
      "article-section.hero": ArticleSectionHero;
      "article-section.image": ArticleSectionImage;
      "article-section.row-start": ArticleSectionRowStart;
      "article-section.text-with-image-section": ArticleSectionTextWithImageSection;
      "article-section.text": ArticleSectionText;
    }
  }
}
