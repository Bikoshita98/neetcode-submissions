class MyHashMap {
    constructor() {
        this.mapArray = new Array(1000001).fill(-1);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.mapArray[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.mapArray[key];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.mapArray[key] = -1;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
