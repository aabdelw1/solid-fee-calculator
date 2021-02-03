import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Heading, Badge, Pane, Avatar, Text, IconButton} from 'evergreen-ui'
// import { Icon } from "@blueprintjs/core";
// import CardPopover from './CardPopover'

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Card = (props) => {
  const { data, index } = props
  const { item, category, userType, adType, price, expiration, fee } = data
  // const [visible, setVisible] = useState(false)

  const convertDate = (date) => {
    const year = date.split('-')[0]
    const month = months[date.split('-')[1]-1]
    const day = date.split('-')[2]

    return `${month} ${day}, ${year}`
  }

  return (
    <Pane marginRight="2rem" marginLeft="2rem">
    <Pane border="default" marginBottom="2rem" display="flex" margin="1rem" justifyContent='space-between' flexDirection="row" borderRadius={"2rem"} hoverElevation={1} background="white">
      <Pane display="flex" flexDirection="row" paddingY="0.1rem" margin="1rem">
        <Avatar src={`/static/${category}.png`} name={category} size={40} marginRight={'1rem'} marginLeft={'1rem'}/>
        <Pane marginY="auto">
          <Pane display="flex" flexDirection="column">
            <Heading size={500}>{item}</Heading>
            <Pane><Text size={300}>{convertDate(expiration)}</Text></Pane>
          </Pane>
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="row">
  <Pane display="flex" flexDirection="column" marginRight={'4rem'} marginY='auto' textAlign="right"><Text> {adType == 25 ? "Auction" : "Buy it Now"} ${price}</Text></Pane>
        <Pane marginY='0.1rem' marginRight='0.5rem'></Pane>

      </Pane>
    </Pane>
    </Pane>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card
