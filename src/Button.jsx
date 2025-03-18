import { useState } from "react"

export default function Button () {
    let [val, setVal] = useState("");

    let handelChange = (evt) => {
        setVal(evt.target.value);
    }

    let handelSubmit = async (evt) => {
        console.log(val);
    }


    return  (
        <div>
            <p>Hello</p>
            <label htmlFor="name"> Name</label>
            <input onChange={handelChange} value={val} id="name" placeholder="enterName" ></input>
            <button onClick={handelSubmit} type="submit">hello</button>
        </div>
    )
}



// 
//     let handelSubmit = (evt) => {
//         setVal(evt.target.val)
//         console.log(val);
//     }

//         retun (
//             <div>
//                 
                
//                 
//             </div>
//         )
// }