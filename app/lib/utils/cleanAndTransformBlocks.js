import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (b) => {
        b.forEach(block => {
            block.id = uuid();

            if ( block.innerBlocks?.length )
            {
                assignIds(block.innerBlocks);
            }
        });
    };

    // Assign IDs to blocks & their inner blocks (if applicable)
    assignIds(blocks);

    return blocks;
}