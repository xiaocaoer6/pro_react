import React from 'react';
import './index.less'

class PureReact extends React.Component {
    state = { // 类里面写赋值语句，直接写到实例身上
        count: 0,
    }
    change = (type) => {
      // 纯react版本
        // const count = this.state.count
        // const selectValue = + this.refs.selectRef.value
        // switch (type) {
        //     case 'add':
        //         this.setState({ count: count + selectValue})
        //         break;
        //     case 'reduce':
        //         this.setState({ count: count - selectValue})
        //         break;
        //     case 'addIfEven':
        //         this.setState({ count: Math.abs(count)%2 ? count : count + selectValue })
        //         break;
        //     case 'reduceIfOdd':
        //         this.setState({ count: Math.abs(count)%2 ? count - selectValue : count})
        //         break;
        // }

      // redux版本
      const selectValue = + this.refs.selectRef.value
      switch (type) {
                case 'add':
                    this.props.store.dispatch({type: 'add', data: selectValue})
                    break;
                case 'reduce':
                    this.props.store.dispatch({type: 'reduce', data: selectValue})
                    break;
                case 'addIfEven':
                   (Math.abs(this.props.store.getState())%2 === 0) && this.props.store.dispatch({type: 'add', data: selectValue})
                    break;
                case 'reduceIfOdd':
                   (Math.abs(this.props.store.getState())%2 === 1) && this.props.store.dispatch({type: 'reduce', data: selectValue})
                    break;
            }
    }

    render() {
        return (
            <div className="test">
                <h3>这里是加减案例</h3>
                <h2>这里是结果 {this.props.store.getState()}</h2>
                <div className="handle">
                    <select ref="selectRef">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    <button onClick={() => { this.change('add') }}>增加</button>
                    <button onClick={() => { this.change('reduce') }}>减少</button>
                    <button onClick={() => { this.change('addIfEven') }}> 当前是偶数就增加</button>
                    <button onClick={() => { this.change('reduceIfOdd') }}>当前是奇数就减少</button>
                </div>
            </div>
        )
    }
}

export default PureReact;
