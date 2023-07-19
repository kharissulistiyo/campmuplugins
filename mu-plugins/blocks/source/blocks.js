/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './_z-index.scss'; // Have z-index values, similar to https://github.com/WordPress/gutenberg/blob/9a345b7e5c03ea57042115dcccb0bca0c0764d30/packages/base-styles/_z-index.scss
import './edit.scss'; // Common styles for WordCamp Blocks.
import { BLOCKS } from './blocks/'; // Trailing slash required to differentiate the folder from the file.
// This attaches to the hook itself.
import './hooks/latest-posts';
import './variations';

/*
 * When a block isn't enabled on the current site, it won't be registered by it's `controller.php`.
 * See also `blocks.php`.
 */
const enabledBlocks = BLOCKS.filter( ( block ) =>
	window.WordCampBlocks.hasOwnProperty( block.NAME.replace( 'wordcamp/', '' ) )
);

enabledBlocks.forEach( ( { NAME, SETTINGS } ) => {
	registerBlockType( NAME, SETTINGS );
} );

