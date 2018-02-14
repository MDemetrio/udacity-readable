export function updateObjectInArray(array, obj) {
    return array.map((item, index) => {
        if (item.id !== obj.id) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...obj
        };
    });
}

export function orderArray(arr, orderBy = { field: '', ascending: true }) {
    return arr.sort((a, b) => {
        const result = a[orderBy.field] > b[orderBy.field];
        if (orderBy.ascending)
            return result ? -1 : 1;
        else
            return result ? 1 : -1;
    });
}

export function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }