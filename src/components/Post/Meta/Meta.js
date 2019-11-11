// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';


moment.lang('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});
moment.locale('es');

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Publicado el {moment(date).format('D MMM YYYY')}</p>
  </div>
);

export default Meta;
