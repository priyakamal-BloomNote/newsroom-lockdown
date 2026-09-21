let inventory = [];


export function addItem(item) {

    if (!inventory.includes(item)) {

        inventory.push(item);

    }

}


export function getInventory() {

    return inventory;

}


export function clearInventory() {

    inventory = [];

}