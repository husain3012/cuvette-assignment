
import classes from './appBar.module.css'


const UserInfo = ({name, avatar}:{name:string, avatar:string}) => {
  return (
    <div className={classes['user-info-card']}>
        <div className={classes['user-avatar']}>
            <img src={avatar} alt={name} width={64}/>
        </div>
        <div className={classes['user-name']}>{name}</div>
    </div>
  )
}

export default UserInfo