<?php
/**
 * GaiaEHR (Electronic Health Records)
 * Copyright (C) 2015 Certun, LLC.
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
namespace modules\reportcenter\dataProvider;

class ReportList
{

    /**
     * Get the available reports in the /report directory
     * this will include OpenSource ones and commercial ones.
     */
    public function getAvailableReports()
    {
        try
        {
            $AvailableReports = array();
            $Index = 0;
            if ($handle = opendir('../modules/reportcenter/reports'))
            {
                while (false !== ($entry = readdir($handle)))
                {
                    if(is_dir("../modules/reportcenter/reports/$entry"))
                    {
                        if($entry == '.' || $entry == '..') continue;
                        $filePointer = "../modules/reportcenter/reports/$entry/reportSpec.json";
                        if(file_exists($filePointer) && is_readable($filePointer))
                        {
                            $fileContent = json_decode(file_get_contents($filePointer), true);
                            $AvailableReports[$Index]['id'] = $Index;
                            $AvailableReports[$Index]['report_name'] = $fileContent['title'];
                            $AvailableReports[$Index]['report_description'] = $fileContent['description'];
                            $AvailableReports[$Index]['category'] = $fileContent['category'];
                            $AvailableReports[$Index]['version'] = $fileContent['version'];
                            $AvailableReports[$Index]['author'] = $fileContent['author'];
                            $Index++;
                        }
                    }
                }
                closedir($handle);
            }
            else
            {
                throw new \Exception('Error: Reports directory not found.');
            }
            return (object)$AvailableReports;
        }
        catch(\Exception $Error)
        {
            return $Error;
        }
    }

}