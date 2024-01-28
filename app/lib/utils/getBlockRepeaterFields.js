// Get repeater field in a key => value pair array instead of dirty data from GraphQL - used as shorthand, doest work for nested repeaters
// Parent is an object inside which our repeater is nested
// Parent - obj, repeater array - [0 - repeater length (int), 1 - repeater name (string)], field - string
const getBlockRepeaterFields = (parent = {}, [ repeater_length = 0, repeater_name = '' ], field = '') => {
    let fields = [];

    if ( !parent || !repeater_length || !repeater_name || !field )
    {
        return undefined;
    }

    // Loop through all repeater_length fields of specific key in the parent
    for ( let i = 0; i < repeater_length; i++ )
    {
        if ( parent[`${repeater_name}_${i}_${field}`] )
        {
            fields.push(
                // {
                //     [field]: parent[`${repeater_name}_${i}_${field}`]
                // }
                parent[`${repeater_name}_${i}_${field}`]
            );
        }
    }

    return fields;
};

export default getBlockRepeaterFields;