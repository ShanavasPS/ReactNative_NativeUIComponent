import UIKit

@objc(IOSViewManager)
class IOSViewManager : RCTViewManager {
  let title = UILabel(frame: CGRect.zero)
  let label = UILabel(frame: CGRect.zero)
  let button1 = UIButton(type: .system)
  let button2 = UIButton(type: .system)

  override func view() -> UIView! {
    return createCustomView()
  }
  
  func createCustomView() -> UIView {
    let containerView = UIView()

    title.text = "Home"
    title.translatesAutoresizingMaskIntoConstraints = false
    title.textColor = UIColor.black
    title.textAlignment = .center
    title.font = UIFont.boldSystemFont(ofSize: 24.0)

    buttonTapped()
    label.translatesAutoresizingMaskIntoConstraints = false
    label.textColor = UIColor.black
    label.textAlignment = .center
    label.font = UIFont.systemFont(ofSize: 16.0)

    button1.setTitle("Generate Number", for: .normal)
    button1.translatesAutoresizingMaskIntoConstraints = false
    button1.backgroundColor = UIColor.blue
    button1.setTitleColor(UIColor.white, for: .normal)
    button1.layer.cornerRadius = 8.0
    button1.titleLabel?.font = UIFont.boldSystemFont(ofSize: 16.0)
    button1.addTarget(self, action: #selector(buttonTapped), for: .touchUpInside)

    button2.setTitle("Send to RN", for: .normal)
    button2.translatesAutoresizingMaskIntoConstraints = false
    button2.backgroundColor = UIColor.blue
    button2.setTitleColor(UIColor.white, for: .normal)
    button2.layer.cornerRadius = 8.0
    button2.titleLabel?.font = UIFont.boldSystemFont(ofSize: 16.0)
    button2.addTarget(self, action: #selector(button2Tapped), for: .touchUpInside)

    containerView.addSubview(title)
    containerView.addSubview(label)
    containerView.addSubview(button1)
    containerView.addSubview(button2)

    NSLayoutConstraint.activate([
      title.topAnchor.constraint(equalTo: containerView.topAnchor, constant: 10),
      title.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 10),
      title.trailingAnchor.constraint(equalTo: containerView.trailingAnchor, constant: -10),

      label.topAnchor.constraint(equalTo: title.bottomAnchor, constant: 40),
      label.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 10),
      label.trailingAnchor.constraint(equalTo: containerView.trailingAnchor, constant: -10),

      button1.topAnchor.constraint(equalTo: label.bottomAnchor, constant: 10),
      button1.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 10),
      button1.trailingAnchor.constraint(equalTo: containerView.trailingAnchor, constant: -10),

      button2.topAnchor.constraint(equalTo: button1.bottomAnchor, constant: 10),
      button2.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 10),
      button2.trailingAnchor.constraint(equalTo: containerView.trailingAnchor, constant: -10),
    ])

    return containerView
  }
    
  @objc func buttonTapped() {
    let randomValue = Int(arc4random_uniform(100)) + 1
    label.text = String(randomValue)
  }

  @objc func button2Tapped() {
    RTEEventEmitter.shared?.emitEvent(withName: "onRandomTextUpdate", body: ["data": label.text])
  }

  override class func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc func sendToNative(_ node: NSNumber, text: String) {
    DispatchQueue.main.async {
      self.title.text = text;
    }
  }
}

