/**
 GaiaEHR (Electronic Health Records)
 Services.js
 Store
 Copyright (C) 2013 Certun

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('App.model.dashboard.panel.OfficeNotesPortletModel', {
    extend: 'Ext.data.Model',
    table: {
        name:'officenotesportlet',
        engine:'InnoDB',
        autoIncrement:1,
        charset:'utf8',
        collate:'utf8_bin',
        comment:'Account'
    },
    fields: [
        {name: 'id', type: 'int'},
        {name: 'date', type: 'date', dateFormat: 'c'},
        {name: 'body', type: 'string'},
        {name: 'user', type: 'string'},
        {name: 'facility_id', type: 'string'},
        {name: 'activity', type: 'string'}
    ],
    proxy : {
        type: 'direct',
        api : {
            read: OfficeNotes.getOfficeNotes
        }
    }
});