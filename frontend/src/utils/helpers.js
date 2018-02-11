export function updateObjectInArray(array, action) {
    return array.map((item, index) => {
        if (item.id !== action.response.id) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.response
        };
    });
}