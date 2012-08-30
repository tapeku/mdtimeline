/**
 * Created with JetBrains PhpStorm.
 * User: erodriguez
 * Date: 4/13/12
 * Time: 3:38 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.patient.charts.WeightForAgeInf',{
    extend:'Ext.panel.Panel',
   	layout:'fit',
   	margin:5,
    title: i18n['weight_for_age_0_36_mos'],

	initComponent:function(){
		var me = this;

		me.items = [
			{
                xtype  : 'chart',
                store  : me.store,
                animate: true,
                shadow : true,
                theme:'Sky',
                axes   : [
                    {
                        title         : i18n['weight_kg'],
                        type          : 'Numeric',
                        position      : 'left',
                        fields        : ['PP','P3','P5','P10','P25','P50','P75','P90','P95','P97'],
                        minimum: 1,
                        maximum: 19,
                        grid          : {
                            odd: {
                                opacity       : 1,
                                stroke        : '#bbb',
                                'stroke-width': 0.5
                            }
                        }
                    },
                    {
                        title         : i18n['age_mos'],
                        type          : 'Numeric',
                        position      : 'bottom',
                        fields        : ['age_mos']
                    }
                ],
                series : [
                    {
                        title       : i18n['weight_kg'],
                        type        : 'scatter',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'PP',
                        smooth      : true,
                        highlight   : {
                            size  : 10,
                            radius: 10
                        },
                        markerConfig: {
                            type          : 'circle',
                            size          : 5,
                            radius        : 5,
                            'stroke-width': 0
                        },
                        tips: {
                            trackMouse: true,
                            renderer: function(storeItem, item) {
                                this.update(i18n['age_mos'] + ': ' + storeItem.get('age_mos') + '<br>' + i18n['weight'] +': ' + storeItem.get('PP'));
                            }
                        }
                    },
                    {
                        title       : 'P3',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P3',
                        smooth      : true,
                        showMarkers : false
                    },
                    {
                        title       : 'P5',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P5',
                        smooth      : true,
                        showMarkers : false
                    },
                    {
                        title       : 'P10',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P10',
                        smooth      : true,
                        showMarkers : false
                    },
                    {
                        title       : 'P25',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P25',
                        smooth      : true,
                        showMarkers : false
                    },
                    {
                        title       : 'P50',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P50',
                        smooth      : true,
                        showMarkers : false,
                        style: {
                            stroke: '#00ff00',
                            'stroke-width': 1,
                            fill: '#80A080',
                            opacity: 0.2
                        }
                    },
                    {
                        title       : 'P75',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P75',
                        smooth      : true,
                        showMarkers : false
                    },
                    {
                        title       : 'P95',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P95',
                        smooth      : true,
                        showMarkers : false
                    },
                    {
                        title       : 'P97',
                        type        : 'line',
                        axis        : 'left',
                        xField      : 'age_mos',
                        yField      : 'P97',
                        smooth      : true,
                        showMarkers : false
                    }
                ]
			}

		];

		me.callParent(arguments);

	}
});