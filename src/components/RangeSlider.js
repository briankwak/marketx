import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'

const sliderStyle = {  // Give the slider some width
  position: 'relative',
  width: '100%',
  height: 60,
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 3,
  marginTop: 30,
  borderRadius: 5,
  backgroundColor: '#E8E9EB',
}

function Handle({
  handle: { id, value, percent },
  handleStyle,
  handleValue,
  getHandleProps
}) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: -9,
        marginTop: 22,
        zIndex: 2,
        width: 18,
        height: 18,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#fff',
        color: '#333',
        boxShadow: '0px 2px 5px #bbb'
      }}
      {...getHandleProps(id)}
    >
      <div style={handleStyle}>
        {handleValue(value)}
      </div>
    </div>
  )
}

function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: 3,
        zIndex: 1,
        marginTop: 30,
        backgroundColor: '#2f6aff',
        borderRadius: 5,
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
    />
  )
}


const RangeSliderValue = () => {
  return (
    <div>
      <Slider
        rootStyle={sliderStyle}
        domain={[0, 10.0]}
        step={0.1}
        mode={2}
        values={[0, 10.0]}
      >
        <Rail>
          {({ getRailProps }) => (
            <div style={railStyle} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  handleStyle={{ fontFamily: 'Inter', fontSize: 14, marginTop: 25, marginLeft: -10 }}
                  handleValue={(value) => {
                    if(value) return "$"+value.toFixed(1)+"B";
                    else return "$"+value;
                  }}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </div>

  )
}

const RangeSliderYear = () => {
  return (
    <div>
      <Slider
        rootStyle={sliderStyle}
        domain={[1990, 2020]}
        step={1}
        mode={2}
        values={[1990, 2020]}
      >
        <Rail>
          {({ getRailProps }) => (
            <div style={railStyle} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  handleStyle={{ fontFamily: 'Inter', fontSize: 14, marginTop: 25, marginLeft: -10 }}
                  handleValue={(value) => {return value}}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </div>

  )
}

export { RangeSliderValue, RangeSliderYear };