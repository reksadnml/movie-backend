//Get category with paging
const getCategoryList = async (req, res, service) => {
    try {
        let category;
        if(req.query.id) {
            const id = req.query.id;
            category = await service.getCategoryById(id)
        }
        else if (req.query.pageNo && req.query.rowPage) {
            category = await service.getAllCategoryPaging(req.query.pageNo, req.query.rowPage);
        }
        else {
            category = await service.getAllCategory();
        }
        res.send(category);
    }
    catch (e) {
        res.status(500);
    }
};

//post category
const addNewCategory = async (req, res, service) => {
    const category = req.body;
    const newCategory = await service.createCategory(category);
    res.send(newCategory);
};

//put category
const updateCategory = async (req, res, service) => {
    const category = req.body;
    const updateCategory = await service.updateCategory(category);
    res.send(updateCategory);
};

//delete category
const deleteCategory = async (req, res, service) => {
    const categoryId = req.param.id;
    const deleteCategory = await service.deleteCategory(categoryId);
    res.send({id: categoryId});
};

module.exports = {getCategoryList, addNewCategory, updateCategory, deleteCategory};