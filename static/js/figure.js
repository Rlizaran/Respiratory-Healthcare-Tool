
//function for dropdown menu and initial graphs 
function init() {
    var colType = ['Administrative_Avg', 'Informational_Avg', 'ProductRelated_Avg',
        'BounceRates', 'ExitRates', 'PageValues', 'SpecialDay', 'Month',
        'OperatingSystems', 'Browser', 'Region', 'TrafficType', 'VisitorType',
        'Weekend', 'Revenue'];
    var menu1 = d3.select("#selDataset1");
    colType.forEach((type) => {
        menu1.append("option").text(type).property("value", type);
    });

    //var menu2 = d3.select("#selDataset2");
    //colType.forEach((type) => {
    //menu2.append("option").text(type).property("value", type);
    //});

    //creating function for initial plots 
    var col = 'Administrative_Avg';
    graphs(col);



};
//function for dropdown menu and initial graphs 

function graphs(names) {
    d3.json("/data/all_data").then((data) => {
        // for bar plot and bubles plot
        var Revenue = []
        for (let i = 0; i < data.length; i++) {
            c = data[i].Revenue
            Revenue.push(c);
        }
        console.log(Revenue)
        var yaxis = []
        for (let i = 0; i < data.length; i++) {
            col = data[i].Administrative_Avg
            yaxis.push(col);
        }
        console.log(yaxis)
        var samples = data.samples
        //variable for each sample 
        var singleSample = samples.filter(sample => sample.id == names)[0];

        // slicing 10 largest
        var otuIds = singleSample.otu_ids.slice(0, 11);
        var otuLabels = singleSample.otu_labels.slice(0, 11);
        var sampleValues = singleSample.sample_values.slice(0, 11);

        console.log(otuIds);

        // bar plots
        var bar = d3.select("#bar");
        data = [{
            x: sampleValues,
            y: otuIds,
            type: 'bar',
            orientation: 'h',
            text: otuLabels,
            marker: {
                color: 'rgba(55,128,191,0.6)',
            },
        }];
        var layout = {

            bargap: 0.3,
            yaxis: {
                type: 'category',
                tickvals: otuIds,
            }
        }

        Plotly.newPlot("bar", data, layout);

        // bubles plot
        //variable for each sample 
        var otuIdsAll = singleSample.otu_ids;
        var otuLabelsAll = singleSample.otu_labels;
        var sampleValuesAll = singleSample.sample_values;

        var bubble = d3.select("#bubble");
        data = [{
            y: sampleValuesAll,
            x: otuIdsAll,
            type: 'scatter',
            mode: 'markers',
            text: otuLabelsAll,
            marker: {
                size: sampleValuesAll,
                color: otuIdsAll
            }
        }];

        Plotly.newPlot("bubble", data);
    })
};

function optionChanged1(newSample) {
    graphs(newSample);
};
init();


