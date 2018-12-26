/*      
 *  Copyright 2018-2019 Alejandro Calderon Mateos
 *
 *  This file is part of Eventual (see github.com/acaldero/eventual).
 * 
 *  Eventual is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Eventual is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with WepSIM.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


  function timeline_items2json ( items )
  {
	  // items -> data
	  var data = items.get({
		type: {
		  start: 'ISODate',
		  end: 'ISODate'
		}
	  }) ;

	  // serialize the data 
	  return JSON.stringify(data, null, 2) ;
  }

  function timeline_json2items ( items, items_json )
  {
          var data = JSON.parse(items_json) ;

	  // add to items
	  items.clear() ;
	  items.add(data) ;
  }

  function timeline_data2items ( items, data )
  {
	  // add to items
	  items.clear() ;
	  items.add(data) ;
  }

  function timeline_new ( items, container )
  {
          // new timeline
          var options = {
                           editable: true
                        } ;

          var timeline = new vis.Timeline(container, items, options) ;

          // return timeline
          return timeline ;
  }

