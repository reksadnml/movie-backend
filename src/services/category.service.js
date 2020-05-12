const logEvent = require('../events/myEmitter');
const movie = require('../models/movie.model');
const Category = require('../models/category.model');

class CategoryService {
    constructor(category) {
        this.category = category;
    }
    async getAllCategory() {
        let result;
        try {
            result = await Category.findAll({include: movie});
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getCategoryById(id) {
        let result;
        try {
            result = await Category.findByPk(id, {include: movie});
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error (e);
        }
        return result;
    }

    async createCategory(category) {
        let result;
        try {
            result = await Category.create(category);
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async updateCategory(newCategory) {
        const category = await Category.findByPk(newCategory.id);
        category.categoryName = newCategory.categoryName;
        let result;
        try {
            result = await category.save();
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async deleteCategory(categoryId) {
        const category = await Category.findByPk(categoryId);
        let result;
        try {
            result = await category.destroy();
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }
}

module.exports = CategoryService;
