import S from '@sanity/desk-tool/structure-builder'
import { VscSettings as settingsIcon } from 'react-icons/vsc'
import { TiWarning as disclaimerIcon } from 'react-icons/ti'
import { GoMegaphone as kyrIcon } from 'react-icons/go'

export default () =>
  S.list()
    .title( 'Content' )
    .items( [
      S.listItem()
        .title( 'App Settings' )
        .icon(settingsIcon)
        .child(
          S.editor()
            .title( 'App Settings' )
            .documentId( 'appSettings' )

      ),
      S.divider(),
      S.listItem()
        .title( 'Know Your Rights' )
        .icon( kyrIcon )
        .child(
          S.editor()
            .schemaType( 'knowYourRights' )
            .documentId( 'knowYourRights' )
            .title( 'Know Your Rights Screen Settings' )

      ),
      S.listItem()
        .title( 'Occupational Health & Safety' )
        .child(
          S.editor()
            .schemaType( 'ohs' )
            .documentId( 'ohs' )
            .title( 'OHS Screen Settings' )

      ),
      S.listItem()
        .title( 'Types of Hazards' )
        .child(
          S.editor()
            .schemaType( 'typesOfHazards' )
            .documentId( 'typesOfHazards' )
            .title( 'Types of Hazards Screen Settings' )

        ),
      S.divider(),
      S.listItem()
        .title( 'Disclaimer' )
        .icon( disclaimerIcon )
        .child(
          S.editor()
            .schemaType( 'disclaimer' )
            .documentId( 'disclaimer' )
            .title( 'Disclaimer Screen Settings' )

        ),
      ...S.documentTypeListItems().filter( listItem => ![ 'appSettings', 'disclaimer', 'knowYourRights', 'ohs', 'typesOfHazards' ].includes( listItem.getId() ) )
    ])