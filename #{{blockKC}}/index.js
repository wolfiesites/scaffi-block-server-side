import blockName from './constants';
/**
 * External dependencies
 */
import { cloneDeep } from 'lodash';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { registerBlockType } from '@wordpress/blocks';
import { createBlock, withColors } from '@wordpress/block-editor';
/**
  * Internal dependencies
  */
import Editor from './block/editor';
import './style/style.scss';
import icon from './../icon-frontkom.png'


// attributes define via php !!!
const settings = {
	apiVersion: 2,
	title: __( '#{{name}}' ),
	icon: <img src={icon} />,
	description: __( '' ),
	category: 'common',
	support: {
		inserter: false,
		alignment: [ 'left', 'right', 'center' ],
	},
	edit: Editor,

	save: () => null,
	transform: [

	],
};

/**
  * Register block
  */
registerBlockType( `frontkom/${blockName}`, settings );

