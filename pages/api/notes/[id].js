import { getUniqueNote } from "../../../firebase/client";

export default (req, res) => {
    const {query} = req
    const {id} = query
    getUniqueNote(id).then((doc)=>{
        if (doc.length > 0) {
            res.json(doc[0])
        } else {
            res.status(404).end()
        }
        
    }).catch(e=>res.status(404).end())
};