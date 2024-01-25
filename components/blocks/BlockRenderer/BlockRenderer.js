export const BlockRenderer = ({ blocks }) => {
	return blocks.map(block => {
		// Render blocks based on their name property
		switch(block.name)
		{
			// GALLERY
			case 'acf/test2block': {
				// console.log('BLOCK: ', block);
				return (
					<div key={block.id} >
                        test2Block
                    </div>
				);
			}
			// DEFAULT CASE: UNKNOW BLOCK
			default: {
				console.log('UNKNOWN: ', block);
				return null;
			}
		}
	});
}