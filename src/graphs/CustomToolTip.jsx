import "./CustomToolTip.css"

export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <div>
            {payload.map((pld) => (
                <div className="custom-tooltip-datarow" style={{backgroundColor: LightenDarkenColor(pld.stroke ? pld.stroke : pld.fill, 100)}}>
                    <span
                        style={{
                            color: pld.stroke ? pld.stroke : pld.fill
                        }}
                        >{pld.dataKey}</span>
                    <p
                        style={{
                            color: pld.stroke ? pld.stroke : pld.fill
                        }}
                        >{pld.value}</p>
                </div>
            ))}

          </div>
        </div>
      );
    }
  
    return null;
  };


  function LightenDarkenColor(hex, amt) {
    // Remove the "#" if it's present
    hex = hex.replace(/^#/, '');

    // Parse the hex color to RGB
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);

    // Adjust brightness
    r = Math.max(0, Math.min(255, r + amt));
    g = Math.max(0, Math.min(255, g + amt));
    b = Math.max(0, Math.min(255, b + amt));

    // Convert the adjusted RGB values back to hexadecimal
    const adjustedHex = ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);

    return `#${adjustedHex}`;
}
  
