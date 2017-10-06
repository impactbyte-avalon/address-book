function kontak (name, phone, email){
    for(i=0;i<name.length;i++){
        console.log(name[i]+", "+phone[i]+", "+email[i])
    }
    
}
const name= ["Name","aaa", "bbb", "ccc"]
const phone= ["Phone","0812", "0813", "0814"]
const email= ["Email","yahoo", "gmail", "cc"]

kontak(name, phone, email)
