import React from "react";

const Apps = () => {
  const apps = [
    { 
      name: "Kite", 
      desc: "Trading and investing platform", 
      img: "/smallcaseLogo.png"
    },
    { 
      name: "Console", 
      desc: "Backoffice & reporting dashboard", 
      img: "streakLogo.png"
    },
    { 
      name: "Coin", 
      desc: "Direct mutual fund platform", 
      img: "/varsity.png"
    }
  ];

  return (
    <div className="d-flex justify-content-center py-4">
      <div className="text-center w-100" style={{ maxWidth: 900 }}>
        
        <h2 className="fw-normal mb-4">Zerodha Apps</h2>

        <div className="row g-3 justify-content-center">
          {apps.map((app, i) => (
            <div key={i} className="col-md-4 col-sm-6">
              <div className="card border-0 shadow-sm p-3 h-100">
                <img 
                  src={app.img} 
                  alt={app.name} 
                  className="img-fluid mb-3" 
                  style={{ maxHeight: 80, objectFit: "contain" }}
                />
                <h5 className="mb-1">{app.name}</h5>
                <p className="text-muted small mb-0">{app.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Apps;
