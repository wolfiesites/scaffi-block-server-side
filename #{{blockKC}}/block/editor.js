
import blockName from '../constants';

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { Fragment } from '@wordpress/element';
import { useBlockProps, InnerBlocks, getColorClassName } from '@wordpress/block-editor';
import { ServerSideRender } from '@wordpress/components';


/**
 * Internal Dependencies
 */
import Controls from './controls';


// this goes to "exit" prop while registering block (represntation of what u see on gutenberg side)
const Editor = ( props ) => {
	const { className, attributes: { exampleAttribute, exampleAttribute2 } } = props;

	const classes = classnames(
		className,
		`block-${blockName}`,
	);
	// this is only class of the main div
	const blockProps = useBlockProps( {
		className: classes,
	} );

	const align = 'center';

	return (
		<Fragment>
			{/* controls component / element holds all inputs and controllers of attributes Component is created with html and some javascript functions states etc*/}
			<Controls
				{ ...{ ...props } }
			/>
			<div { ...blockProps }>
				<div>
					  <ServerSideRender
					  	block="frontkom/#{{blockKC}}"
					  	// pass here attributes and use on server side, changing attributes forces element to rerender
					  	attributes={{
					  		align: align,
					  	}}
					   />
				</div>
			</div>
		</Fragment>
	);
};

export default Editor;
