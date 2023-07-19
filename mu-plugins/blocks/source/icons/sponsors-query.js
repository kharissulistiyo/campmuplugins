/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/icons';
import { Path, SVG } from '@wordpress/primitives';

export default function() {
	return (
		<Icon
			icon={
				<SVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<Path
						d="M9.213 15.101a2 2 0 0 1 3.574 0c1.957-1.179 3.41-2.756 4.284-4.348 1.104-2.036 1.26-4.064.276-5.28-.888-1.09-2.044-1.505-3.217-1.471-1.173.034-2.311.532-3.13 1.234-.82-.702-1.959-1.2-3.132-1.234-1.172-.034-2.328.38-3.217 1.47-.983 1.217-.827 3.245.294 5.28.86 1.594 2.31 3.17 4.268 4.35Z"
						fill="#000"
					/>
					<Path
						d="m15.307 16.307-.005-.02-.007-.02-.008-.019v-.001l-.48-1.31-.165-.453-.026.009c-.607-1.191-1.902-1.993-3.376-1.993-2.029 0-3.74 1.531-3.74 3.5 0 1.968 1.711 3.5 3.74 3.5.475 0 .932-.083 1.353-.236l.496-.18-.206-.485-.456-1.076-.185-.437-.446.162c-.17.061-.357.096-.556.096-.86 0-1.492-.637-1.492-1.344 0-.707.631-1.344 1.492-1.344.72 0 1.29.454 1.447 1.016l.129.464.044-.01.293.801c.44 1.504 1.906 2.573 3.607 2.573 2.029 0 3.74-1.532 3.74-3.5 0-1.969-1.711-3.5-3.74-3.5-.474 0-.93.083-1.35.235l-.496.18.205.485.455 1.076.185.438.446-.162c.17-.062.357-.096.555-.096.86 0 1.492.637 1.492 1.344 0 .707-.631 1.344-1.492 1.344-.72 0-1.29-.454-1.447-1.016l-.006-.02Z"
						fill="#000"
						stroke="#fff"
					/>
				</SVG>
			}
		/>
	);
}
