import { getActions } from './adapters/dockercloud'

export default class Index extends React.Component {
  static async getInitialProps () {
    const actions = await getActions()

    console.log('got actions', actions)
    return { actions }
  }

  _renderAction(action, i) {
    console.log(action)
    return (
      <div key={`Action_${i}`}>
        {action.action}
      </div>
    )
  }

  render () {
    const { actions } = this.props
    return (
      <div>
        hello world
        {actions && actions.map(this._renderAction)}
      </div>
    )
  }
}
