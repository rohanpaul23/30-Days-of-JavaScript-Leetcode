var TimeLimitedCache = function() {
    // A map to store the key-value pairs and their expiration time
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    // Get the current time in milliseconds
    const now = Date.now();
    // Calculate the expiration time as the sum of the current time and the duration
    const expirationTime = now + duration;
    // Check if the key already exists in the cache
    if (this.cache.has(key)) {
        // Update the value and expiration time
        const entry = this.cache.get(key);
        entry.value = value;
        entry.expirationTime = expirationTime;
        // Return true to indicate that the key already existed
        return true;
    } else {
        // Add a new entry to the cache
        this.cache.set(key, { value: value, expirationTime: expirationTime });
        // Return false to indicate that the key did not exist before
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key, or -1 if expired or not found
 */
TimeLimitedCache.prototype.get = function(key) {
    // Get the current time in milliseconds
    const now = Date.now();
    // Check if the key exists in the cache
    if (this.cache.has(key)) {
        // Get the entry for the key
        const entry = this.cache.get(key);
        // Check if the entry has expired
        if (entry.expirationTime < now) {
            // Remove the expired entry from the cache
            this.cache.delete(key);
            // Return -1 to indicate that the entry has expired
            return -1;
        } else {
            // Return the value associated with the key
            return entry.value;
        }
    } else {
        // Return -1 to indicate that the key was not found
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    // Get the current time in milliseconds
    const now = Date.now();
    // Count the number of non-expired keys in the cache
    let count = 0;
    for (const entry of this.cache.values()) {
        if (entry.expirationTime >= now) {
            count++;
        }
    }
    return count;
};