import React, { Component } from 'react';


export default class newFile extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            file: '',
            number: '',
            date: '',
            location: '',
            time: '',
            temp: '',
            wind: '',
            percip: '',
            contractor: '',
            sub: '',
            site: '',
            name: '',
            timef: ''
        }
    }

    // Creation of text file 
    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob(["Job Number: " + this.state.number + "\n" +
            "Date of Inspection: " + this.state.date + "\n" +
            "Time at Site: " + this.state.time + "\n" +
            "Location: " + this.state.location + "\n" +
            "Temperature: " + this.state.temp + "\n" +
            "Wind: " + this.state.wind + "\n" +
            "Percipitation: " + this.state.percip + "\n" +
            "Contractor: " + this.state.contractor + "\n" +
            "Subcontractor: " + this.state.sub + "\n" +
            "Site Conditions: " + this.state.site + "\n" +
            "Name: " + this.state.name + "\n" +
            "Time from Site: " + this.state.timef], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);

        // Default to job number if no file name is given 
        if (this.state.file === '') {
            element.download = this.state.number + ".txt";
        } else {
            element.download = this.state.file + ".txt";
        }

        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    // on form submit...
    handleFormSubmit(e) {
        e.preventDefault()
        localStorage.setItem('document', JSON.stringify(this.state));
    }

    // React Life Cycle (Local Storage)
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
        if (localStorage.getItem('document')) {
            this.setState({
                file: this.documentData.file,
                number: this.documentData.number,
                date: this.documentData.date,
                location: this.documentData.location,
                time: this.documentData.time,
                temp: this.documentData.temp,
                wind: this.documentData.wind,
                percip: this.documentData.percip,
                contractor: this.documentData.contractor,
                sub: this.documentData.sub,
                site: this.documentData.site,
                name: this.documentData.name,
                timef: this.documentData.timef
            })
        } else {
            this.setState({
                file: '',
                number: '',
                date: '',
                location: '',
                time: '',
                temp: '',
                wind: '',
                percip: '',
                contractor: '',
                sub: '',
                site: '',
                name: '',
                timef: ''
            })
        }
    }

    render() {
        return (
            <section className="container">
                <h1>
                    Input Form:
            </h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>File Name: </label>
                        <input type="text" name="file" className="form-control" value={this.state.file} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Job Number: </label>
                        <input type="text" name="number" className="form-control" value={this.state.number} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Date of Inspection: </label>
                        <input type="text" name="date" className="form-control" value={this.state.date} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" name="location" className="form-control" value={this.state.location} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Time at Site: </label>
                        <input type="text" name="time" className="form-control" value={this.state.time} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Temp: </label>
                        <input type="text" name="temp" className="form-control" value={this.state.temp} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Wind: </label>
                        <input type="text" name="wind" className="form-control" value={this.state.wind} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Percipitation: </label>
                        <input type="text" name="percip" className="form-control" value={this.state.percip} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Contractor: </label>
                        <input type="text" name="contractor" className="form-control" value={this.state.contractor} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Subcontractor: </label>
                        <input type="text" name="sub" className="form-control" value={this.state.sub} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Site Conditions: </label>
                        <input type="text" name="site" className="form-control" value={this.state.site} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Time from Site: </label>
                        <input type="text" name="timef" className="form-control" value={this.state.timef} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Save</button>
                    <button type="submit" onClick={this.downloadTxtFile} className="btn btn-primary btn-block">Finish Form</button>
                </form>
            </section>
        )
    }
}

