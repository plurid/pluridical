export const chromePromise = {
    bookmarks: {
        getTree: (): Promise<any> => {
            let promise = new Promise((resolve, reject) => {
                chrome.bookmarks.getTree((items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        getSubTree: (
            id: string,
        ): Promise<any> => {
            let promise = new Promise((resolve, reject) => {
                chrome.bookmarks.getSubTree(id, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        get: (
            id: any,
        ): Promise<any> => {
            let promise = new Promise((resolve, reject) => {
                chrome.bookmarks.get(id, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        search: (
            query: string | chrome.bookmarks.BookmarkSearchQuery,
        ): Promise<chrome.bookmarks.BookmarkTreeNode[]> => {
            if (typeof query === 'string') {
                const promise: Promise<chrome.bookmarks.BookmarkTreeNode[]> = new Promise((resolve, reject) => {
                    chrome.bookmarks.search(query, (items) => {
                        const error = chrome.runtime.lastError;
                        if (error) {
                            reject(error);
                        } else {
                            resolve(items);
                        }
                    });
                });
                return promise;
            }

            const promise: Promise<chrome.bookmarks.BookmarkTreeNode[]> = new Promise((resolve, reject) => {
                chrome.bookmarks.search(query, (items) => {
                    const error = chrome.runtime.lastError;
                    if (error) {
                        reject(error);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
    },

    storage: {
        sync: {
            get: (keys: any): Promise<any> => {
                let promise = new Promise((resolve, reject) => {
                    chrome.storage.sync.get(keys, (items) => {
                        let err = chrome.runtime.lastError;
                        if (err) {
                            reject(err);
                        } else {
                            resolve(items);
                        }
                    });
                });
                return promise;
            },
            set: (items: any) => {
                let promise = new Promise((resolve, reject) => {
                    chrome.storage.sync.set(items, () => {
                        let err = chrome.runtime.lastError;
                        if (err) {
                            reject(err);
                        } else {
                            resolve(true);
                        }
                    });
                });
                return promise;
            },
            getBytesInUse: (keys: any) => {
                let promise = new Promise((resolve, reject) => {
                    chrome.storage.sync.getBytesInUse(keys, (items) => {
                        let err = chrome.runtime.lastError;
                        if (err) {
                            reject(err);
                        } else {
                            resolve(items);
                        }
                    });
                });
                return promise;
            },
            remove: (keys: any) => {
                let promise = new Promise((resolve, reject) => {
                    chrome.storage.sync.remove(keys, () => {
                        let err = chrome.runtime.lastError;
                        if (err) {
                            reject(err);
                        } else {
                            resolve(true);
                        }
                    });
                });
                return promise;
            },
            clear: () => {
                let promise = new Promise((resolve, reject) => {
                    chrome.storage.sync.clear(() => {
                        let err = chrome.runtime.lastError;
                        if (err) {
                            reject(err);
                        } else {
                            resolve(true);
                        }
                    });
                });
                return promise;
            }
        },
    },
}
