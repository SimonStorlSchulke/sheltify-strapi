import type { Schema, Attribute } from "@strapi/strapi";

export interface ArticleSectionAnimalCards extends Schema.Component {
  collectionName: "components_article_section_animal_cards";
  info: {
    displayName: "Tier-Karten";
    description: "";
    icon: "apps";
  };
  attributes: {
    animals: Attribute.Relation<"article-section.animal-cards", "oneToMany", "api::animal.animal">;
    queryFilter: Attribute.String;
    filteredAmount: Attribute.Integer;
    text: Attribute.Blocks;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
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
    type: Attribute.Enumeration<["primary", "secondary", "call-to-action"]> & Attribute.Required & Attribute.DefaultTo<"primary">;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
  };
}

export interface ArticleSectionHero extends Schema.Component {
  collectionName: "components_article_section_heroes";
  info: {
    displayName: "Bild \u00FCber ganze Breite";
    description: "";
  };
  attributes: {
    hero: Attribute.Media<"images"> & Attribute.Required;
  };
}

export interface ArticleSectionImage extends Schema.Component {
  collectionName: "components_article_section_images";
  info: {
    displayName: "Bild(er) oder Video";
    description: "";
    icon: "picture";
  };
  attributes: {
    images: Attribute.Media<"images" | "videos", true>;
    gallery: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
  };
}

export interface ArticleSectionNewsCards extends Schema.Component {
  collectionName: "components_article_section_news_cards";
  info: {
    displayName: "NewsCards";
    description: "";
  };
  attributes: {
    type: Attribute.Enumeration<["news", "blog"]>;
    amount: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 20;
        },
        number
      > &
      Attribute.DefaultTo<3>;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
  };
}

export interface ArticleSectionPaypalButton extends Schema.Component {
  collectionName: "components_article_section_paypal_buttons";
  info: {
    displayName: "paypal-button";
    icon: "handHeart";
  };
  attributes: {
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.Required & Attribute.DefaultTo<"nein">;
  };
}

export interface ArticleSectionRowStart extends Schema.Component {
  collectionName: "components_article_section_row_starts";
  info: {
    displayName: "Spalten";
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
      Attribute.DefaultTo<3>;
    textCentered: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
  };
}

export interface ArticleSectionSectionStart extends Schema.Component {
  collectionName: "components_article_section_section_starts";
  info: {
    displayName: "Abschnitts-Beginn";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
  };
}

export interface ArticleSectionTextWithImageSection extends Schema.Component {
  collectionName: "components_article_section_text_with_image_sections";
  info: {
    displayName: " Text mit Bild(ern) oder Video";
    icon: "picture";
    description: "";
  };
  attributes: {
    text: Attribute.Blocks;
    images: Attribute.Media<"images" | "videos", true>;
    imagePosition: Attribute.Enumeration<["oben", "rechts", "links", "unten"]> & Attribute.Required & Attribute.DefaultTo<"rechts">;
    gallery: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
  };
}

export interface ArticleSectionText extends Schema.Component {
  collectionName: "components_article_section_texts";
  info: {
    displayName: " Text";
    description: "";
    icon: "layer";
  };
  attributes: {
    text: Attribute.Blocks;
    background: Attribute.Enumeration<["nein", "gr\u00FCn", "beige"]> & Attribute.DefaultTo<"nein">;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "article-section.animal-cards": ArticleSectionAnimalCards;
      "article-section.button-link": ArticleSectionButtonLink;
      "article-section.hero": ArticleSectionHero;
      "article-section.image": ArticleSectionImage;
      "article-section.news-cards": ArticleSectionNewsCards;
      "article-section.paypal-button": ArticleSectionPaypalButton;
      "article-section.row-start": ArticleSectionRowStart;
      "article-section.section-start": ArticleSectionSectionStart;
      "article-section.text-with-image-section": ArticleSectionTextWithImageSection;
      "article-section.text": ArticleSectionText;
    }
  }
}
