import sendApirequest from "../utils/api.js";

const create = ( {label} ) => {
    return sendApirequest({
        url: '/tasks',
        method: 'POST',
        params: {
            content: label
        }
    })
}

const retrieve = ( id ) => {
    return sendApirequest({url:'/tasks/' + id})
}

const retrieveAll = (  ) => {
    return sendApirequest({url: '/tasks'})
}

const update = ( {id, label} ) => {
    
}

const destroy = ( id ) => {
    return sendApirequest({
        url: '/tasks/' + id,
        method: 'DELETE'
    })
}

const service = {
    create,
    retrieve,
    retrieveAll,
    update,
    destroy,
};

export default service;