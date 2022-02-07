import { v4 as uuidv4 } from 'uuid';

let users=[
]
export const getUsers=(req,res)=>{
    res.send(users);
};
export const createUser=(req,res)=>{
    
    const user=req.body;
    const uid=uuidv4();
    users.push({...user,id:uid});
    res.send(`user with username ${user.firstName} ${user.lastName} of age ${user.age} is registered with id ${uid}`);
};

export const getUserById=(req,res)=>{
    const id=req.params.id;
    const user=users.find((user)=> user.id===id);
    res.send(user);
};

export const deleteUser=(req,res)=>{
    const id=req.params.id;
    users=users.filter((user)=> user.id!=id);
    res.send(`user deleted with userId ${id}`);
};

export const updateUser=(req,res)=>{
    const id=req.params.id;
    const user=users.find((user)=>user.id===id);

    const {firstName,lastName,age}=req.body;

    if(firstName)
    {
        user.firstName=firstName;
    }
    if(lastName)
    {
        user.lastName=lastName;
    }
    if(age)
    {
        user.age=age;
    }
    
    res.send(`user upadted with userid${id}`);
};
