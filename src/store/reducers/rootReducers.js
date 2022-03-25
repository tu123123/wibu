import { data } from "../../database/firebaseData";

const dataR={
    user:[
        {
            id:0,
            name:"admin",
            pass:"123"
        }
    
    ],
    Loading:[
        
    ],
    Content:[
     
        { id:"t1",
            content:"ăn cơm không biết ngày mai ra sao",
            img:"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/275853909_5583117571715752_5947335728538211080_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=yvY2ZNnQimMAX99_Lwg&_nc_oc=AQlTrcCfDeHAI_f-zDHAxhHdRRMVuM6oWSS8rID47LinEGEJwQWEiibPXfUIx6u1EOUIh_vfosnNYSB5yXY88Wp4&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8dfSZcBgghCQRgunKdgWOEqh9NXngznqC3qUAZ65mNYQ&oe=623754BA"
        }
    ],
    comment:[
           
        { user:{
                img:"https://i.pinimg.com/originals/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg",
        },
            id:1,
            cmt:"đẹp quá",
        }
        
    ],
    Thongbao:[
        {   
            title:"ANOTHERWORD",
            content:"On the surface, high school students Naomi Katagaki and Ruri Ichigyou seem to be polar opposites. In contrast to Naomi's shy and timid personality, Ruri strikes fear in her classmates due to being rather cold and outspoken. Nevertheless, both Naomi and Ruri nourish a strong passion for reading, which gradually draws the two closer",
            img:"https://i.pinimg.com/originals/2a/5e/11/2a5e11514f1ce16fff1c2a5e93a79f5b.jpg"
        },
        {   
            title:"Doraemon: Nobita no Little Star Wars 2021",
            content:"Doraemon: Nobita no Little Wars 2021 là bộ phim điện ảnh Nhật Bản thứ 41 trong loạt phim điện ảnh Doraemon do Yamaguchi Susumu đạo diễn và Satō Dai viết kịch bản. Phim dự kiến khởi chiếu tại Nhật Bản vào ngày 4 tháng 3 năm 2022",
            img:"https://upload.wikimedia.org/wikipedia/vi/0/0e/Little_Star_Wars_2021.jpg"
        }
   ],
    

}


const rootReducers=(state=dataR,action)=>{
    data.collection('content').get().then((i)=>{

        i.forEach( i=>{
            console.log(i.data())
        })
    }

    )
    data.collection("chat").add({tenloai:"Tình báo",thutu:5,anhien:true})
    .then((docRef) => {console.log("Document written:", docRef.id);})
    .catch((error) => {console.error("Error add doc: ", error);});
        
   
        
    // eslint-disable-next-line default-case
    switch(action.type)
    {
        case "ADD_USER":
       
        return{
            ...state,user:[...state.user,action.payload]
        }
        case "ADD-Content":
            return{
                ...state,Content:[...state.Content,action.payload]
            }
        case "RemoveLoad":
                let filter= state.Loading;
                filter=filter.filter(i=>i.id!=action.payload)
                return{
                    ...state,Loading:[filter],
                }
                   
        case "ADD-Loading":
        return{
                ...state,Loading:[...state.Loading,{
                    img:`c${state.Loading.length}`,
                    id:`L${state.Loading.length}`,
                    trangthai:action.payload,     
            }]
        }
        default:
            return state
    }
   
}
export default rootReducers;