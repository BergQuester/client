// @flow
import * as React from 'react'

import * as Kb from '../common-adapters'
import Inbox from './inbox/container'
import Conversation from './conversation/container'

type Props = {|
  navigation?: any,
|}

class InboxAndConversation extends React.PureComponent<Props> {
  render() {
    return (
      <Kb.Box2 direction="horizontal" fullWidth={true} fullHeight={true}>
        <Inbox />
        <Conversation navigation={this.props.navigation} />
      </Kb.Box2>
    )
  }
}

export default InboxAndConversation
