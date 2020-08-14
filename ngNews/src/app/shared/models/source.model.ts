export class Source {
    Id: string;
    Name: string;
    Description: string;
    Url: string;
    Category: string;
    Language: string;
    Country: string;
}

export class SourcesData {
    Status: string;
    Sources: Source[];
}
