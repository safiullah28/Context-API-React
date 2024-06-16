import React from 'react'
import { data1 ,data2} from './App'

function ChildC() {
    return (
        <div>
           <data1.Consumer>
            {
                (name)=>{
                    return(
                        <data2.Consumer>
                            {
                                (age)=>{
                                    return(
                                        <div>
                                            <h1>My name is {name} and my age is {age}</h1>
                                        </div>
                                    )
                                }
                            }
                        </data2.Consumer>
                    )
                }
            }
           </data1.Consumer>
        </div>
    )
}

export default ChildC
