import React, {Component} from "react"
import PropTypes from "prop-types"
import ThemeSwitch from "./thenmeSwitch"


class Content extends Component{
    static contextTypes = {
        store: PropTypes.object
    }

    constructor(){
        super()
        this.state = {themeColor:''}
    }

    componentWillMount(){
        this._updateThemeColor()
    }
    _updateThemeColor(){
        const {store} = this.context
        const state = store.getState()
        this.setState({themeColor: state.themeColor})
    }

    render(){
        return(
            <div>
                <p style={{ color: this.state.themeColor }}>我来试试 这个颜色会不会变</p>
                <ThemeSwitch />
            </div>
        )
    }
}

export default Content