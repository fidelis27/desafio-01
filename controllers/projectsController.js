const projects = require('../src/projects');

module.exports = {
    async index(req, res) {
        return res.json(projects);
    },

    async store(req, res) {
        const data = req.body;
        projects.push(data);
        return res.json(projects);
    },

    async update(req, res) {
        projects.filter(p => {
            const { title } = req.body
            if (p.id === req.params.id) {
                p.title = title;
            }
        });

        return res.json(projects);
    },

    async delete(req, res) {
        const { id } = req.params;

        projects.filter(p => {
            if (p.id == id) {
                projects.splice(projects.indexOf(p), 1);
            }
        });
        return res.json(projects)
    },

    async storeByTask(req, res) {
        const { id } = req.params;
        const { title } = req.body;
        const project = projects.find(p => p.id == id);

        project.tasks.push(title);
        return res.json(projects);
    }
}