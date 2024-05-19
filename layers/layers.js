var wms_layers = [];

var format_Whisper200EJkWhm_0 = new ol.format.GeoJSON();
var features_Whisper200EJkWhm_0 = format_Whisper200EJkWhm_0.readFeatures(json_Whisper200EJkWhm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Whisper200EJkWhm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Whisper200EJkWhm_0.addFeatures(features_Whisper200EJkWhm_0);
var lyr_Whisper200EJkWhm_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Whisper200EJkWhm_0, 
                style: style_Whisper200EJkWhm_0,
                popuplayertitle: "Whisper 200 EJ (kWh/m²)",
                interactive: false,
    title: 'Whisper 200 EJ (kWh/m²)<br />\
    <img src="styles/legend/Whisper200EJkWhm_0_0.png" /> 0 - 0,46<br />\
    <img src="styles/legend/Whisper200EJkWhm_0_1.png" /> 0,46 - 0,92<br />\
    <img src="styles/legend/Whisper200EJkWhm_0_2.png" /> 0,92 - 1,38<br />\
    <img src="styles/legend/Whisper200EJkWhm_0_3.png" /> 1,38 - 1,84<br />\
    <img src="styles/legend/Whisper200EJkWhm_0_4.png" /> 1,84 - 2,3<br />'
        });
var format_Whisper200EAkWhm_1 = new ol.format.GeoJSON();
var features_Whisper200EAkWhm_1 = format_Whisper200EAkWhm_1.readFeatures(json_Whisper200EAkWhm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Whisper200EAkWhm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Whisper200EAkWhm_1.addFeatures(features_Whisper200EAkWhm_1);
var lyr_Whisper200EAkWhm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Whisper200EAkWhm_1, 
                style: style_Whisper200EAkWhm_1,
                popuplayertitle: "Whisper 200 EA (kWh/m²)",
                interactive: false,
    title: 'Whisper 200 EA (kWh/m²)<br />\
    <img src="styles/legend/Whisper200EAkWhm_1_0.png" /> 0 - 168<br />\
    <img src="styles/legend/Whisper200EAkWhm_1_1.png" /> 168 - 336<br />\
    <img src="styles/legend/Whisper200EAkWhm_1_2.png" /> 336 - 504<br />\
    <img src="styles/legend/Whisper200EAkWhm_1_3.png" /> 504 - 672<br />\
    <img src="styles/legend/Whisper200EAkWhm_1_4.png" /> 672 - 840<br />'
        });
var format_Algrie_2 = new ol.format.GeoJSON();
var features_Algrie_2 = format_Algrie_2.readFeatures(json_Algrie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algrie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Algrie_2.addFeatures(features_Algrie_2);
var lyr_Algrie_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Algrie_2, 
                style: style_Algrie_2,
                popuplayertitle: "Algérie",
                interactive: true,
                title: '<img src="styles/legend/Algrie_2.png" /> Algérie'
            });

lyr_Whisper200EJkWhm_0.setVisible(true);lyr_Whisper200EAkWhm_1.setVisible(true);lyr_Algrie_2.setVisible(true);
var layersList = [lyr_Whisper200EJkWhm_0,lyr_Whisper200EAkWhm_1,lyr_Algrie_2];
lyr_Whisper200EJkWhm_0.set('fieldAliases', {'fid': 'fid', 'index': 'index', 'Ej_min': 'Ej_min', 'Ej_max': 'Ej_max', 'label': 'label', });
lyr_Whisper200EAkWhm_1.set('fieldAliases', {'fid': 'fid', 'index': 'index', 'E_min': 'E_min', 'E_max': 'E_max', 'label': 'label', });
lyr_Algrie_2.set('fieldAliases', {'name': 'name', 'name_ar': 'name_ar', 'name_ber': 'name_ber', 'density': 'density', 'city_code': 'city_code', });
lyr_Whisper200EJkWhm_0.set('fieldImages', {'fid': 'TextEdit', 'index': 'Range', 'Ej_min': 'TextEdit', 'Ej_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Whisper200EAkWhm_1.set('fieldImages', {'fid': 'TextEdit', 'index': 'Range', 'E_min': 'TextEdit', 'E_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Algrie_2.set('fieldImages', {'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_ber': 'TextEdit', 'density': 'KeyValue', 'city_code': 'KeyValue', });
lyr_Whisper200EJkWhm_0.set('fieldLabels', {'fid': 'no label', 'index': 'no label', 'Ej_min': 'no label', 'Ej_max': 'no label', 'label': 'no label', });
lyr_Whisper200EAkWhm_1.set('fieldLabels', {'fid': 'no label', 'index': 'no label', 'E_min': 'no label', 'E_max': 'no label', 'label': 'no label', });
lyr_Algrie_2.set('fieldLabels', {'name': 'inline label - always visible', 'name_ar': 'no label', 'name_ber': 'no label', 'density': 'no label', 'city_code': 'no label', });
lyr_Algrie_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});