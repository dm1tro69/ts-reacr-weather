import React from 'react';
import s from './ThisDay.module.scss'
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

const ThisDay = () => {
    return (
        <div className={s.this_day}>
           <div className={s.top_block}>
               <div className={s.top_block_wrapper}>
                   <div className={s.this_temp}>20*</div>
                   <div className={s.this_day_name}>Сегодня</div>
               </div>

               <GlobalSvgSelector id={'this_day'}/>
           </div>
           <div className={s.bottom_block}>
              <div className={s.this_time}>Время: <span>21:54</span></div>
              <div className={s.this_city}>Nafplio</div>
           </div>
        </div>
    );
};

export default ThisDay;
