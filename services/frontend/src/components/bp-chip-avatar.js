import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import _get from 'lodash.get'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    margin: 8,
    color: 'white',
    backgroundColor: props => props.color
  }
})

const ProducerChipAvatar = ({ data, classNames, onHandleRemove, imageURL, defaultName }) => {
  const backgroundColor = _get(
    data,
    'data.pointBackgroundColor',
    '#597a81'
  )
  const classes = useStyles({ color: backgroundColor })

  return (
    <Chip
      className={classes.root}
      avatar={
        <Avatar aria-label='Block Compare' className={classNames.avatar}>
          {!imageURL ? defaultName : <img src={imageURL} alt='' width='100%' />}
        </Avatar>
      }
      onDelete={onHandleRemove(data.owner)}
      label={data.owner}
    />
  )
}

ProducerChipAvatar.propTypes = {
  data: PropTypes.object,
  classNames: PropTypes.object,
  onHandleRemove: PropTypes.func,
  imageURL: PropTypes.string,
  defaultName: PropTypes.string
}

export default ProducerChipAvatar
