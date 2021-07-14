import React,{Fragment} from 'react';

import classes from './VideoChategory.module.css';

const VideoChategory = () =>{
    return <Fragment>
        <div className={classes.video_chategory}>
        <span className={classes.selected}>Tümü</span>
        <span>Canlı</span>
        <span>Mixler</span>
        <span>Müzik</span>
        <span>Yemek pişirme programları</span>
        <span>Sitcom'lar</span>
        <span>Futbol</span>
        <span>Rep yapma</span>
        <span>Matematik</span>
        <span>Turistlik yerler</span>
        <span>Animasyon</span>
        <span>Aksiyon ve macera oyunları</span>
    </div>
    <div className={classes.constant}></div>
        </Fragment>
}

export default VideoChategory