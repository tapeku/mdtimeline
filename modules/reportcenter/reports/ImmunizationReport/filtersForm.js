/**
 * GaiaEHR (Electronic Health Records)
 * Copyright (C) 2015 TRA NextGen, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Modules.reportcenter.reports.AutomatedMeasureCalculation.filtersForm', {
    extend: 'Ext.form.Panel',
    requires:[
        'Ext.form.field.Date',
        'App.ux.combo.ActiveProviders'
    ],
    xtype: 'reportFilter',
    region: 'north',
    title: _('filters'),
    itemId: 'AutomatedMeasureCalculation',
    collapsible: true,
    height: 120,
    border: true,
    fieldDefaults: {
        labelWidth: 90
    },
    bodyPadding: 2,
    items:[
        {
            xtype: 'datefield',
            name: 'begin_date',
            fieldLabel: _('begin_date'),
            allowBlank: false,
            width: 320,
            format: g('date_display_format'),
            submitFormat: 'Y-m-d'
        },
        {
            xtype: 'datefield',
            name: 'end_date',
            fieldLabel: _('end_date'),
            width: 320,
            allowBlank: false,
            format: g('date_display_format'),
            submitFormat: 'Y-m-d'
        },
        {
            xtype: 'activeproviderscombo',
            fieldLabel: _('provider'),
            name: 'provider_id',
            width: 400,
            allowBlank: false,
            displayField: 'option_name',
            valueField: 'id',
            listeners: {
                select: function(combo, records, eOpts){
                    var providerName = Ext.ComponentQuery.query('reportFilter #provider_name')[0];
                    providerName.setValue(records[0].data.option_name);
                }
            }
        },
        {
            xtype: 'hiddenfield',
            itemId: 'provider_name',
            name: 'provider_name',
            value: ''
        }
    ]
});