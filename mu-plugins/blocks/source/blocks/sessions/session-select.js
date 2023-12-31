/**
 * External dependencies
 */
import { every, flatMap, includes } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ItemSelect, buildOptions } from '../../components';

/**
 * Component for selecting posts/terms for populating the block content.
 */
class SessionSelect extends Component {
	/**
	 * Run additional operations during component initialization.
	 *
	 * @param {Object} props
	 */
	constructor( props ) {
		super( props );

		this.buildSelectOptions = this.buildSelectOptions.bind( this );
		this.getCurrentSelectValue = this.getCurrentSelectValue.bind( this );
		this.isLoading = this.isLoading.bind( this );
	}

	/**
	 * Build or retrieve the options that will populate the Select dropdown.
	 *
	 * @return {Array}
	 */
	buildSelectOptions() {
		const { entities } = this.props;
		const { wcb_session, wcb_track, wcb_session_category } = entities;

		const optionGroups = [
			{
				entityType: 'post',
				type: 'wcb_session',
				label: __( 'Sessions', 'wordcamporg' ),
				items: wcb_session,
			},
			{
				entityType: 'term',
				type: 'wcb_track',
				label: __( 'Tracks', 'wordcamporg' ),
				items: wcb_track,
			},
			{
				entityType: 'term',
				type: 'wcb_session_category',
				label: __( 'Session Categories', 'wordcamporg' ),
				items: wcb_session_category,
			},
		];

		return buildOptions( optionGroups );
	}

	/**
	 * Determine the currently selected options in the Select dropdown based on block attributes.
	 *
	 * @return {Array}
	 */
	getCurrentSelectValue() {
		const { attributes } = this.props;
		const { mode, item_ids } = attributes;

		const options = flatMap( this.buildSelectOptions(), ( group ) => {
			return group.options;
		} );

		let value = [];

		if ( mode && item_ids.length ) {
			value = options.filter( ( option ) => {
				return mode === option.type && includes( item_ids, option.value );
			} );
		}

		return value;
	}

	/**
	 * Check if all of the entity groups have finished loading.
	 *
	 * @return {boolean}
	 */
	isLoading() {
		const { entities } = this.props;

		return ! every( entities, ( value ) => {
			return Array.isArray( value );
		} );
	}

	/**
	 * Render an ItemSelect component with block-specific settings.
	 *
	 * @return {Element}
	 */
	render() {
		const { label, setAttributes } = this.props;

		return (
			<ItemSelect
				className="wordcamp-sessions__select"
				label={ label }
				value={ this.getCurrentSelectValue() }
				onChange={ ( changed ) => setAttributes( changed ) }
				options={ this.buildSelectOptions() }
				isLoading={ this.isLoading() }
			/>
		);
	}
}

export default SessionSelect;
