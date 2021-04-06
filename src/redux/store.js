import { createStore } from 'redux'
import countReducer from './count-reducer'

// store 饭店创建的时候最少得有后厨人员
export default createStore(countReducer)

