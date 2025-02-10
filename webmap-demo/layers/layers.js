var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SLCo_County_Boundary_1 = new ol.format.GeoJSON();
var features_SLCo_County_Boundary_1 = format_SLCo_County_Boundary_1.readFeatures(json_SLCo_County_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_County_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_County_Boundary_1.addFeatures(features_SLCo_County_Boundary_1);
var lyr_SLCo_County_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLCo_County_Boundary_1, 
                style: style_SLCo_County_Boundary_1,
                popuplayertitle: 'SLCo_County_Boundary',
                interactive: false,
                title: '<img src="styles/legend/SLCo_County_Boundary_1.png" /> SLCo_County_Boundary'
            });
var format_SLCo_healthcare_facilities_tracts_2 = new ol.format.GeoJSON();
var features_SLCo_healthcare_facilities_tracts_2 = format_SLCo_healthcare_facilities_tracts_2.readFeatures(json_SLCo_healthcare_facilities_tracts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_healthcare_facilities_tracts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_healthcare_facilities_tracts_2.addFeatures(features_SLCo_healthcare_facilities_tracts_2);
var lyr_SLCo_healthcare_facilities_tracts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLCo_healthcare_facilities_tracts_2, 
                style: style_SLCo_healthcare_facilities_tracts_2,
                popuplayertitle: 'SLCo_healthcare_facilities_tracts',
                interactive: false,
    title: 'SLCo_healthcare_facilities_tracts<br />\
    <img src="styles/legend/SLCo_healthcare_facilities_tracts_2_0.png" /> 19 - 71<br />\
    <img src="styles/legend/SLCo_healthcare_facilities_tracts_2_1.png" /> 71 - 126<br />\
    <img src="styles/legend/SLCo_healthcare_facilities_tracts_2_2.png" /> 126 - 195<br />\
    <img src="styles/legend/SLCo_healthcare_facilities_tracts_2_3.png" /> 195 - 250<br />\
    <img src="styles/legend/SLCo_healthcare_facilities_tracts_2_4.png" /> 250 - 588<br />' });
var format_hospital_catchment_3 = new ol.format.GeoJSON();
var features_hospital_catchment_3 = format_hospital_catchment_3.readFeatures(json_hospital_catchment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_catchment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_catchment_3.addFeatures(features_hospital_catchment_3);
var lyr_hospital_catchment_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hospital_catchment_3, 
                style: style_hospital_catchment_3,
                popuplayertitle: 'hospital_catchment',
                interactive: false,
                title: '<img src="styles/legend/hospital_catchment_3.png" /> hospital_catchment'
            });
var format_hospital_4 = new ol.format.GeoJSON();
var features_hospital_4 = format_hospital_4.readFeatures(json_hospital_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_4.addFeatures(features_hospital_4);
var lyr_hospital_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hospital_4, 
                style: style_hospital_4,
                popuplayertitle: 'hospital',
                interactive: true,
                title: '<img src="styles/legend/hospital_4.png" /> hospital'
            });

lyr_CartoLight_0.setVisible(true);lyr_SLCo_County_Boundary_1.setVisible(true);lyr_SLCo_healthcare_facilities_tracts_2.setVisible(true);lyr_hospital_catchment_3.setVisible(true);lyr_hospital_4.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_SLCo_County_Boundary_1,lyr_SLCo_healthcare_facilities_tracts_2,lyr_hospital_catchment_3,lyr_hospital_4];
lyr_SLCo_County_Boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SLCo_healthcare_facilities_tracts_2.set('fieldAliases', {'objectid': 'objectid', 'geoid10': 'geoid10', 'total_count': 'total_count', 'total': 'total', });
lyr_hospital_catchment_3.set('fieldAliases', {'FACID': 'FACID', 'TYPE': 'TYPE', 'GEOM': 'GEOM', });
lyr_hospital_4.set('fieldAliases', {'FACID': 'FACID', 'TYPE': 'TYPE', 'hospital_catchment': 'hospital_catchment', });
lyr_SLCo_County_Boundary_1.set('fieldImages', {'OBJECTID': 'Range', 'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'Range', 'POP_CURRES': 'Range', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SLCo_healthcare_facilities_tracts_2.set('fieldImages', {'objectid': 'TextEdit', 'geoid10': 'TextEdit', 'total_count': 'TextEdit', 'total': 'Range', });
lyr_hospital_catchment_3.set('fieldImages', {'FACID': 'TextEdit', 'TYPE': 'TextEdit', 'GEOM': 'TextEdit', });
lyr_hospital_4.set('fieldImages', {'FACID': 'TextEdit', 'TYPE': 'TextEdit', 'hospital_catchment': 'TextEdit', });
lyr_SLCo_County_Boundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SLCo_healthcare_facilities_tracts_2.set('fieldLabels', {'objectid': 'header label - visible with data', 'geoid10': 'no label', 'total_count': 'no label', 'total': 'no label', });
lyr_hospital_catchment_3.set('fieldLabels', {'FACID': 'no label', 'TYPE': 'no label', 'GEOM': 'no label', });
lyr_hospital_4.set('fieldLabels', {'FACID': 'no label', 'TYPE': 'no label', 'hospital_catchment': 'no label', });
lyr_hospital_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});