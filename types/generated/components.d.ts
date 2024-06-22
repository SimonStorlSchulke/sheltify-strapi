import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleSectionHero extends Schema.Component {
  collectionName: 'components_article_section_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    hero: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface ArticleSectionImage extends Schema.Component {
  collectionName: 'components_article_section_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
    title: Attribute.String;
  };
}

export interface ArticleSectionTextWithGallery extends Schema.Component {
  collectionName: 'components_article_section_text_with_galleries';
  info: {
    displayName: 'textWithGallery';
    description: '';
  };
  attributes: {
    gallery: Attribute.Media<'images', true>;
    textBlocks: Attribute.Blocks;
    title: Attribute.String;
  };
}

export interface ArticleSectionTextWithImageSection extends Schema.Component {
  collectionName: 'components_article_section_text_with_image_sections';
  info: {
    displayName: 'textWithImage';
    icon: 'apps';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
    images: Attribute.Media<'images', true>;
    imagePosition: Attribute.Enumeration<['oben', 'rechts', 'links', 'unten']> &
      Attribute.Required &
      Attribute.DefaultTo<'rechts'>;
    title: Attribute.String;
  };
}

export interface ArticleSectionText extends Schema.Component {
  collectionName: 'components_article_section_texts';
  info: {
    displayName: 'text';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article-section.hero': ArticleSectionHero;
      'article-section.image': ArticleSectionImage;
      'article-section.text-with-gallery': ArticleSectionTextWithGallery;
      'article-section.text-with-image-section': ArticleSectionTextWithImageSection;
      'article-section.text': ArticleSectionText;
    }
  }
}
